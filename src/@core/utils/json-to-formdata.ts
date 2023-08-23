export const jsonToFormData = (json: any) => {
    const formData = new FormData();

    for (var key in json) {
        formData.append(key, json[key])
    }

    return formData;
}