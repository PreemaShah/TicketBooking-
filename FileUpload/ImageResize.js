import React,{Component} from 'react';
import {View,Text,Image,Alert} from 'react-native';
import ImageSizer from 'react-native-image-resizer';

class ImageResize extends Component
{
    componentWillMount(){
        this.imgResize();
    }

    upload(uri)
    {
        const data = new FormData();
        data.append('img',{
            uri:uri,
            name:"test.jpg",
            type:"multipart/form-data"
        });
        fetch("http://localhost:3000/upload",{
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data',
            },
            body:data
        }).then(res=>{
            console.log("Upload")
        }).catch(err=>alert(err));
    }

    imgResize()
    {
        let uri='/Users/lanet/Desktop/ReactNative/Examples/TicketBooking/Image/index.jpg';
        let newWidth=800,newHeigth=650;

        ImageSizer.createResizedImage(uri,newWidth,newHeigth,'JPEG',100,0).then((uri)=>{
            alert('Image:'+uri.path);
            this.upload(uri)
        }).catch((err)=>{
            alert('Error:'+err);
        });
    }
    render()
    {
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
};
export default ImageResize;