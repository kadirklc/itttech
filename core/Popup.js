import Swal from "sweetalert2";
export function ErrorPopup(text) {
    if (text === "-") {
        return;
    }
    return Swal.fire({
        html: text,
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "Tamam",
        customClass: {
            confirmButton: "text-white bg-redcik py-1.5 px-3.5 rounded-lg",
        },
    });
}
export function SuccessPopup(text) {
    if (text === "-") {
        return;
    }
    return Swal.fire({
        html: text,
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Tamam",
        customClass: {
            confirmButton: "btn btn-primary",
        },
    });
}
