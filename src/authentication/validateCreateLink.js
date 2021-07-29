export default function validateCreateLink(values) {
    let errors = {}

    //snippet errors
    if(!values.snippet) {
        errors.snippet = "Description required"
    } else if (!values.snippet || values.snippet.length < 10) {
        errors.snippet = "Description must be at least 10 characters"
    }

    //title errors
    if(!values.title) {
        errors.title = "Title required"
    } else if (!values.title || values.title.length < 3) {
        errors.title = "Title must be at least 3 characters"
    }

    //thumb errors
    if(!values.thumbImg) {
        errors.thumbImg = "Thumb image required"
    } else if (!values.thumbImg || values.thumbImg.length < 3) {
        errors.thumbImg = "Thumb image must exist"
    }

    //description errors
    if(!values.description) {
        errors.description = "Description required"
    } else if (!values.description || values.description.length < 5) {
        errors.description = "Description must be at least 5 characters"
    }
    
    return errors;
}