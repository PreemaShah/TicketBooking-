import React,{Component} from 'react';
import {
    View,
    Text,
    Animated,
    Easing
}from 'react-native';
let timer=null;
let pwidth=0;
 class ProgressBar extends Component
{
    constructor(props)
    {
        super(props)
        this.progressWidth=new Animated.Value(0);
    }
    componentDidMount()
    {
        this.progressBar()
    }
    progressBar()
    {
        if(pwidth!==130)
        {
            pwidth+=130/13
            Animated.timing(this.progressWidth,{
                toValue:pwidth,
                duration:300
            }).start(()=>{
                this.progressBar()
            })
        }
    }
    render()
    {
        return(
            <View style={{height:17,width:132,borderRadius:150,borderWidth:1}}>
                <Animated.View style={{width:this.progressWidth,backgroundColor:'red',borderRadius:150,height:15,padding:5}}/>
            </View>
        )
    }
}
export {ProgressBar}