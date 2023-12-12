import React, { FC, useState } from 'react';
import './styles.css';


const AddPizzaForm: FC = () => {

    const [newPizza, setNewPizza] = useState

    return (
        <form>
            <input
                name="title"
                type="text"
                placeholder="Название"
                onChange={handleChange}
                value=""
            />
            <input
                name="price"
                type="text"
                placeholder="Стоимость"
                onChange={handleChange}
                value=""
            />
            <input
                name="img"
                type="text"
                placeholder="Изображение"
                onChange={handleChange}
                value=""
            />
            <button type="submit">
                + Добавить в меню
            </button>
        </form>
    )
}


export default AddPizzaForm