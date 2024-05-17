import { useState } from "react";

type InputEvent = React.ChangeEvent<HTMLInputElement>
type SubmitEvent = React.FormEvent<HTMLFormElement>

export default class UtilForm {
    // Méthode pour la gestion les évènements onChange
    private errors: { [key: string]: string } = {}
    private nameRegex = "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,128}$";
    private dateRegex = "^(0[1-9]|1[0-2])/(0[1-9]|[1-2][0-9]|3[0-1])/(19|20)\\d{2}$";
    private dateRegexOnChange = "^[\\d\\/]{0,10}$";
    private addressRegex = "^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,128}$";
    private zipRegex = "^\\d{4}$|^\\d{5}$";
    private zipRegexOnChange = "^\\d{0,5}$";

    // Méthode pour obtenir les erreurs
    getErrors() {
        return this.errors
    }

    // Méthode pour la gestion des erreurs
    setErrors(errors: { [key: string]: string }) {
        this.errors = errors
    }

    validateFirstName(firstName: string): boolean {
        if (!firstName) {
            this.errors.firstName = "Ce champ est obligatoire"
            return false
        }

        if (!firstName.match(this.nameRegex)) {
            this.errors.firstName = 'Le prénom ne doit contenir que des lettres';
            return false
        }
        this.errors.firstName="";
        return true;

    }

    validateLastName(lastName: string): boolean {
        if (!lastName) {
            this.errors.lastName = "Ce champ est obligatoire"
            return false
        }
        if (!lastName.match(this.nameRegex)) {
            this.errors.lastName = 'Le nom ne doit contenir que des lettres';
            return false
        }
        this.errors.lastName="";
        return true;
    }

    validateStreet(street: string): boolean {
        if (!street) {
            this.errors.street = "Ce champ est obligatoire"
            return false
        }
        if (!street.match(this.addressRegex)) {
            this.errors.street = 'L\'adresse ne doit contenir que des lettres et des chiffres';
            return false
        }
        this.errors.street="";
        return true;
    }

    validateCity(city: string): boolean {
        if (!city) {
            this.errors.city = "Ce champ est obligatoire"
            return false
        }
        if (!city.match(this.nameRegex)) {
            this.errors.city = 'La ville ne doit contenir que des lettres';
            return false
        }
        this.errors.city="";
        return true;
    }

    validateZip(zip: string): boolean {
        if (!zip) {
            this.errors.zip = "Ce champ est obligatoire"
            return false
        }
        if (!zip.match(this.zipRegex)) {
            this.errors.zip = 'Le code postal doit contenir 4 ou 5 chiffres';
            return false
        }
        this.errors.zip="";
        return true;
    }


    // Méthode pour la gestion des évènements onChange
    handleInputChange(e: InputEvent) {
        const target = e.target
        const name = target.name
        const value = target.value
        if (name === "firstName") {
            this.validateFirstName(value)
        } else if (name === "lastName") {
            this.validateLastName(value)
        } else {
            if (!value) {
                this.errors[name] = "Ce champ est obligatoire"
            } else {
                delete this.errors[name]
            }
        }
    }

    handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        // Vérifiez si le formulaire contient des erreurs
        const errorKeys = Object.keys(this.errors);
        if (errorKeys.length > 0) {
            // Il y a des erreurs, ne soumettez pas le formulaire
            console.log('Il y a des erreurs dans le formulaire', this.errors);
        } else {
            // Il n'y a pas d'erreurs, soumettez le formulaire
            console.log('Soumission du formulaire');
            // Ajoutez ici votre logique pour la soumission du formulaire
        }
    }


}