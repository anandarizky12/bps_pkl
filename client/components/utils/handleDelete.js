import axios from 'axios';

const handleDelete = (id, url) => {
    return axios.delete('api/question/'+ id)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}