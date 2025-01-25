import { useEffect, useState } from "react";
import { Keyboard } from "react-native";


export default function useKeyboardOffsetHeight(){
    
    const [keyboardOffsetHeight, setKeyboardOffsetHeight] = useState(0);
        
    useEffect(() => {
        // const keyboardWillAndroidShowListener = Keyboard.addListener(
        //     'keyboardDidShow',
        //     (e) => {
        //         console.log('my e',e)
        //         setKeyboardOffsetHeight(e.endCoordinates.height);
        //     }
        // )
        const keyboardShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
              if (e && e.endCoordinates) {
                console.log('Keyboard event:', e);
                setKeyboardOffsetHeight(e.endCoordinates.height);
              }
            }
          );
        const keyboardWillAndroidHideListener = Keyboard.addListener(
                'keyboardDidHide',
            () => {
                setKeyboardOffsetHeight(0);
            }
        )
        const keyboardWillShowListener = Keyboard.addListener(
            'keyboardWillShow',
            e => {
                setKeyboardOffsetHeight(e.endCoordinates.height);
            }
        )
        const keyboardWillHideListener = Keyboard.addListener(
            'keyboardWillHide',
            () => {
                setKeyboardOffsetHeight(0);
            }
        )
        return () => {
            keyboardShowListener.remove()
            keyboardWillAndroidHideListener.remove()
            keyboardWillShowListener.remove()
            keyboardWillHideListener.remove()
        }
    },[])
    return keyboardOffsetHeight
}

