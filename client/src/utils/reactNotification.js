import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

export const warning = {
        // title: "Wonderful!",
        // message: "teodosii@react-notifications-component",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
}

export const success = {
    // title: "Wonderful!",
    // message: "teodosii@react-notifications-component",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
}