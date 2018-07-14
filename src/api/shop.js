import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)

// Vue.http.options.root = 'https://codeline-assets.s3-eu-west-1.amazonaws.com/attachments/Task/9261/9261/12163/weather.php'
// Vue.http.headers.common['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
// Vue.http.headers.common['X-Amz-Algorithm'] = 'AWS4-HMAC-SHA256';
// Vue.http.headers.common['X-Amz-Credential'] = 'AKIAIPK6NU3NSNKVVHQQ%2F20180617%2Feu-west-1%2Fs3%2Faws4_request';
// Vue.http.headers.common['X-Amz-Date'] = '20180617T204642Z';
// Vue.http.headers.common['X-Amz-Expires'] = '604800';
// Vue.http.headers.common['X-Amz-Signature'] = '9169108370e25a561ee9535455772c7da0bec7238a55eab571fc6e2169ca9e5e';

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

export default {
    getAsync (options, cb_success, cb_error) {
        Vue.http.get('weather.php', options)
        .then((response) => {
            cb_success(response.body)
        }, (response) => {
            cb_error(response)
        })
    },
}