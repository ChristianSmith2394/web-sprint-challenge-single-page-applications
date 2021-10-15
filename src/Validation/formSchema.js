import * as yup from'yup'

const formSchema = yup.object().shape({
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'A size is required!'),
    sauce: yup
        .string()
        .trim()
        .oneOf(['original-red', 'garlic-ranch', 'bbq', 'spinach-alfredo'], 'A sauce is required!'),
    special: yup
        .string(),
    name: yup
        .string()
        .min(2, "name must be at least 2 characters")
        .trim(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
})

export default formSchema