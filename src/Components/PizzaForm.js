import React from "react";

export default function PizzaForm(props)
    const {
        values,
        submit,
        errors,
        disabled,
        change
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }

    return (
        
    )