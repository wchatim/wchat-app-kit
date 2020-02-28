import React from 'react';
import RNKit from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-agora';
import Navigation from 'react-navigation';
import {Badge,Button,ButtonGroup,Card,Input,ListItem,PricingCard,Tooltip,SocialIcon,Text,Divider,CheckBox,SearchBar,Icon,colors,getIconType,registerCustomIconType,normalize,Tile,Slider,Avatar,Rating,AirbnbRating,Header,Overlay,ThemeProvider,ThemeConsumer,ThemeContext,withBadge,withTheme} from 'react-native-elements';
import WebView from 'react-native-webview';
import WChat from './src/WChat';
import Storage from './src/Storage';
import NavUtils from './src/NavUtils';
import ScrollableTabView from './src/ScrollableTabView';
import ViewShot from "react-native-view-shot";
import QRCode from 'react-native-qrcode-svg';
import Svg, {Circle,Ellipse,G,TSpan,TextPath,Path,Polygon,Polyline,Line,Rect,Use,Symbol,Defs,RadialGradient,Stop,ClipPath,Pattern,Mask} from 'react-native-svg';
import LocalizedStrings from 'react-native-localization';
const {ScrollableTabBar} = ScrollableTabView;
const {View,Image}  = RNKit;

module.exports = { 
    Navigation,
    NavUtils,
    EUIKit:{Shot:ViewShot,QRCode,View,Badge,Button,ButtonGroup,Card,Input,ListItem,PricingCard,Tooltip,SocialIcon,Text,Divider,CheckBox,SearchBar,Icon,colors,getIconType,registerCustomIconType,normalize,Tile,Slider,Avatar,Rating,AirbnbRating,Header,Overlay,ThemeProvider,ThemeConsumer,ThemeContext,withBadge,withTheme,Image},
    RNKit,
    WebView,
    React,
    WChat,
    Storage,
    LocalizedStrings,
    ScrollableTabView,
    ScrollableTabBar,
    Svg:{Svg,Circle,Ellipse,G,Text:Svg.Text,TSpan,TextPath,Path,Polygon,Polyline,Line,Rect,Use,Image:Svg.Image,Symbol,Defs,RadialGradient,Stop,ClipPath,Pattern,Mask}
}