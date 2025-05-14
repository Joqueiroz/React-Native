import React, {useState} from "react";
import {View, Button, ImageBackground} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const DateTimePickerDefault = ({type, buttonTitle, dateKey, setValue})=>{
    const [isDatePickerVisable, setDatePickerVisibility] = useState(false);

    const showDatePicker=()=>{
        setDatePickerVisibility(true);
    }

    const hideDatePicker=()=>{
        setDatePickerVisibility(false);
    }

    const handleConfirm = (date) =>{
        if(type === "time"){
            const hour = date.getHours();
            const minute = date.getMinutes();
            const formattedTime = `${hour}: ${minute}`
            setValue((prevState)=>({
                ...prevState, 
                [dateKey]:formattedTime
            }))
        } else{
            setValue((prevState)=>({
                ...prevState, 
                [dateKey]:date,
            })) 
        }
        hideDatePicker();
    }
    return(
        <View>
            <Button title={buttonTitle} onPress={showDatePicker} color="black"/>
            <DateTimePicker
            isVisible={isDatePickerVisable}
            mode={type}
            locale="pt_BR"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            pickerContainerStyleIOS={{ImageBackgroundColor:"fff"}}
            textColor="black"
            />
        </View>
    )
};
export default DateTimePickerDefault;