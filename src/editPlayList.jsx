import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function EditPlayList({ selectedList }) {
    useEffect(() => {
        if (selectedList) {
            axios.get(`http://ec2-18-142-50-33.ap-southeast-1.compute.amazonaws.com:5000/api/playList/${selectedList}`)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                    
                });
        }
    }, [selectedList]);

    return(
        <div>
           
        </div>
    )
}
