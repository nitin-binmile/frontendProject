/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    colors:{
      primaryColor:"#642C99",
      secondary1:"#F7CFDA",
      secondary:"#FBFAC9",
      cream:"#FDEFD1",
      transparent:"transparent",
    },
    fontFamily:{
      lato:['lato'],
      Wendy:['Wendy One']
    },
    backgroundImage:{
      'mobile-shop':"url('assets/mobile/bg-mobile.png')",
      'tablet-shop':"url('assets/bg-tablet.png')",
      'desktop-shop':"url('assets/bg-desktop.png')",
       
      'mobile-store':"url('assets/bg-mobile-story.png')",
      'tablet-store':"url('assets/bg-tablet-story.png')",
      'desktop-store':"url('assets/image 90.png')",

      'mobile-chekout':"url('assets/checkout-mobile.png')",
      'tablet-chekout':"url('assets/checkout-tablet.png')",
      'desktop-chekout':"url('assets/checkout-desktop.png')",


      'mobile-misscake':"url('assets/bg 3.png')",
      'tablet-misscake':"url('assets/bg-tablet-story.png')",
      'desktop-misscake':"url('assets/image 90.png')",


      'mobile-56':"url('assets/mobile/image 56.png')",
      'tablet-56':"url('assets/image 55.png')",
      'desktop-56':"url('assets/desktop/image 95.png')",

      'mobile-57':"url('assets/mobile/image 57.png')",
      'image55':"url('assets/image 15.png')"
    }
  },
  plugins: [],
}