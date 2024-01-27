import { is } from "@react-spring/shared";

export class Glue {
    #api_url_base = '';
    #default_json_header = { 'content-type': 'application/json' };

    constructor(api_url_base = 'http://localhost:3000') {
        this.#api_url_base = api_url_base + (api_url_base.endsWith('/') ? '' : '/'); // add tailing / if needed
    }

    async login(phone, password) {
        const res = await this.#fetch(
            'POST',
            `${this.#api_url_base}user/login`,
            {
                phone,
                password,
            }
        );
        return res;
    }

    async check_login() {
        try {

            const is_logged_filtered = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .filter(([key, val]) => (key.trim() == 'profile_json'))
                .map(([k, v]) => [k, JSON.parse(decodeURIComponent(v))]);
            if (is_logged_filtered.length <= 0) {
                return false;
            }

            return is_logged_filtered[0][1];
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async logout() {
        return await this.#fetch(
            'GET',
            'http://localhost:3000/user/logout',
        );
    }

    async create_user(form_data) {
        return await this.#fetch(
            'POST',
            `${this.#api_url_base}user/profile`,
            form_data,
        );
    }

    async get_me() {
        const res = await this.#fetch(
            'GET',
            `${this.#api_url_base}user/profile`
        );
        const altered_data = res.data?.id ? {
            ...res.data,
            photo: (res.data.photo ?
                `${this.#api_url_base}user/profile_pics/${res.data.photo}`
                :
                `https://api.dicebear.com/7.x/thumbs/svg?seed=${res.data.name}&radius=50&backgroundType=gradientLinear,solid&backgroundColor=164863,000000`
            ),
        } : res.data;
        return {
            data: altered_data,
            status: res.status,
        };
    }

    async get_profile_by_id(id) {
        const res = await this.#fetch(
            'GET',
            `${this.#api_url_base}user/profile?id=${id}`
        );
        const altered_data = res.data?.id ? {
            ...res.data,
            photo: (res.data.photo ?
                `${this.#api_url_base}user/profile_pics/${res.data.photo}`
                :
                `https://api.dicebear.com/7.x/thumbs/svg?seed=${res.data.name}&radius=50&backgroundType=gradientLinear,solid&backgroundColor=164863,000000`
            ),
        } : res.data;

        return {
            data: altered_data,
            status: res.status,
        };

    }

    async edit_user(form_data) {
        return await this.#fetch(
            'PATCH',
            `${this.#api_url_base}user/profile`,
            form_data,
        );
    }

    async get_all_posts() {
        const res = await this.#fetch(
            'GET',
            `${this.#api_url_base}post`
        );
        if (res.data && res.data.posts) {
            res.data.posts = res.data.posts.map(post => ({
                ...post,
                images: post.images.map(image => `${this.#api_url_base}post/images/${image}`)
            }))
        }

        return res;
    }

    async get_post_by_id(id) {
        return await this.#fetch(
            'GET',
            `${this.#api_url_base}post?id=${id}`
        )
    }

    async add_me_as_helper(post_id) {
        return await this.#fetch('GET', `${this.#api_url_base}post/add_me_as_helper?post_id=${post_id}`);
    }

    async add_me_as_needy(post_id) {
        return await this.#fetch('GET', `${this.#api_url_base}post/add_me_as_needy?post_id=${post_id}`);
    }

    async remove_me_from_helper(post_id) {
        return await this.#fetch('DELETE', `${this.#api_url_base}post/add_me_as_helper?post_id=${post_id}`);
    }

    async remove_me_from_needy(post_id) {
        return await this.#fetch('DELETE', `${this.#api_url_base}post/add_me_as_needy?post_id=${post_id}`);
    }

    async delete_post(id) {
        return await this.#fetch('DELETE', `${this.#api_url_base}post?id=${id}`);
    }

    async create_post(form_data) {
        return await this.#fetch('POST', `${this.#api_url_base}post`, form_data);
    }

    async edit_post(post_id, form_data) {
        return await this.#fetch(
            'PATCH',
            `${this.#api_url_base}post?id=${post_id}`,
            form_data,
        );
    }

    async calculate_map_distance(lat1, lon1, lat2, lon2) {
        // taken from https://www.movable-type.co.uk/scripts/latlong.html
        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;

        return d;
    }

    async #fetch(method, url, body) {

        // if body is object but not form data then we stringify it
        if ((typeof body == typeof {}) && !(body instanceof FormData)) {
            body = JSON.stringify(body)
        };

        const options = {
            method,
            credentials: 'include',
        };

        // this helps to not to override headers by FormData
        if (!(body instanceof FormData)) options.headers = this.#default_json_header;
        if (method != 'GET') options.body = body;

        return await fetch(url, options).then(r => r.json());
    }

}

