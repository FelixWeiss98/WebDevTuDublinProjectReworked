module.exports = {
    parseInt(value) {
        try {
            value = parseInt(value)
            if(isNaN(value))
                return false;
            else
                return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    parseString(value, maxLength) {
        if(typeof value === "string" && value.length <= maxLength && value !== '')
            return true;
        else 
            return false;
    },

    parseEmail(value, maxLength) {
        let validate = /\w+@\w+\.\w+/;
        let result = validate.test(value);
        if(typeof value === "string" && value.length <= maxLength && value !== '' && result)
            return true;
        else
            return false;
    }
};