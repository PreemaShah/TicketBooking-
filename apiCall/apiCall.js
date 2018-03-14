import axios from 'axios';
export function apiCall(url,type='get',data={},header={}) {
    let reqheader=Object.assign(header,{"Accept":"application/json","Content-Type":"application/json"});

    if(type=='get')
    {

        return axios.get(url,{header:reqheader}).then((response)=>{

            return Promise.resolve(response);

        }).catch((err)=>{
            if(err.response!=undefined)
            {
                return err.response;
            }
            return err;
        })
    }

    else if(type=='post')
    {

        return axios.post(url,data,{header:reqheader}).then((response)=>{
            return Promise.resolve(response)
    }).catch((err)=>{
            if(err.response!=undefined)
            {
                return err.response;
            }
            return err;
        })
    }

    else if(type=='put')
    {

        return axios.put(url,data,{header:reqheader}).then((response)=>{

            return Promise.resolve(response)
        }).catch((err)=>{
            if(err.response!=undefined)
            {
                return err.response;
            }
            return err;
        })
    }



}