import React from 'react';
import './Artefacts_select.css'
import Select_item from '../Select_item';

const Artefacts_select = (props) => {
    alert(props.slot)
    const params = ['Здоровье', 'Выносливость', 'Удар', 'Разрыв', 'Пулестойкость', 'Электрошок', 'Кровотечение', 'Ожог', 'Хим. ожог', 'Радиация', 'Стоимость'];
    const values_1 = ['', '+36', '', '', '', '10', '', '', '', '', '1000'];
    const values_2 = ['', '+73', '', '', '', '10', '', '', '', '', '2500'];
    const values_3 = ['', '+109', '', '', '', '10', '', '', '', '', '5000'];
    const values_4 = ['+200%', '', '-10%', '-10%', '-10%', '', '', '', '', '', '1000'];
    const values_5 = ['+400%', '', '-10%', '-10%', '-10%', '', '', '', '', '', '2500'];
    const values_6 = ['+600%', '', '-10%', '-10%', '-10%', '', '', '', '', '', '5000'];
    const values_7 = ['', '', '', '', '', '', '+133%', '-10%', '-10%', '', '1000'];
    const values_8 = ['', '', '', '', '', '', '+267%', '-10%', '-10%', '', '2500'];
    const values_9 = ['', '', '', '', '', '', '+400%', '-10%', '-10%', '', '5000'];
    const values_10 = ['', '', '', '', '+2%', '', '', '', '', '+5%', '1000'];
    const values_11 = ['', '', '', '', '+3%', '', '', '', '', '+5%', '2500'];
    const values_12 = ['', '', '', '', '+5%', '', '', '', '', '+5%', '5000'];
    const values_13 = ['', '', '', '+2%', '', '', '', '', '', '+5%', '1000'];
    const values_14 = ['', '', '', '+3%', '', '', '', '', '', '+5%', '2500'];
    const values_15 = ['', '', '', '+5%', '', '', '', '', '', '+5%', '5000'];
    const values_16 = ['', '', '', '+5%', '', '', '', '', '', '', '5000'];
    const values_17 = ['', '', '', '', '', '', '-100%', '', '', '-10%', '1000'];
    const values_18 = ['', '', '', '', '', '', '-100%', '', '', '-20%', '2500'];
    const values_19 = ['', '', '', '', '', '', '-100%', '', '', '-30%', '5000'];
    const values_20 = ['', '-18', '', '', '', '', '', '', '', '-10%', '1000'];
    const values_21 = ['', '-18', '', '', '', '', '', '', '', '-20%', '2500'];
    const values_22 = ['', '-18', '', '', '', '', '', '', '', '-30%', '5000'];
    const values_23 = ['', '', '', '', '', '', '', '+30%', '', '', '5000'];
    const values_24 = ['', '', '', '', '', '', '', '', '+30%', '', '5000']; 
    const values_25 = ['', '', '+30%', '', '', '', '', '', '', '', '5000'];
    const values_26 = ['', '', '', '', '', '+30%', '', '', '', '', '5000'];
   
    
    return (
        <div>
            <Select_item name='Бенгальский огонь' img='Бенгальский_огонь(ico)' params={params}  values={values_1}  />
            <Select_item name='Вспышка' img='Вспышка(ico)' params={params}  values={values_2}  />
            <Select_item name='Лунный свет' img='Лунный_свет(ico)' params={params}  values={values_3}  />
            <Select_item name='Кровь камня' img='Кровь_камня(ico)' params={params}  values={values_4}  />
            <Select_item name='Ломоть мяса' img='Ломоть_мяса(ico)' params={params}  values={values_5}  />
            <Select_item name='Душа' img='Душа(ico)' params={params}  values={values_6}  />
            <Select_item name='Слизь' img='Слизь(ico)' params={params}  values={values_7}  />
            <Select_item name='Слизняк' img='Слизняк(ico)' params={params}  values={values_8}  />
            <Select_item name='Слюда' img='Слюда(ico)' params={params}  values={values_9}  />
            <Select_item name='Медуза' img='Медуза(ico)' params={params}  values={values_10}  />
            <Select_item name='Каменный цветок' img='Каменный_цветок(ico)' params={params}  values={values_11}  />
            <Select_item name='Ночная звезда' img='Ночная_звезда(ico)' params={params}  values={values_12}  />
            <Select_item name='Выверт' img='Выверт(ico)' params={params}  values={values_13}  />
            <Select_item name='Грави' img='Грави(ico)' params={params}  values={values_14}  />
            <Select_item name='Золотая рыбка' img='Золотая_рыбка(ico)' params={params}  values={values_15}  />
            <Select_item name='Колобок' img='Колобок(ico)' params={params}  values={values_16}  />
            <Select_item name='Колючка' img='Колючка(ico)' params={params}  values={values_17}  />
            <Select_item name='Кристальная колючка' img='Кристальная_колючка(ico)' params={params}  values={values_18}  />
            <Select_item name='Морской ёж' img='Морской_ёж(ico)' params={params}  values={values_19}  />
            <Select_item name='Капли' img='Капли(ico)' params={params}  values={values_20}  />
            <Select_item name='Огненный шар' img='Огненный_шар(ico)' params={params}  values={values_21}  />
            <Select_item name='Кристалл' img='Кристалл(ico)' params={params}  values={values_22}  />
            <Select_item name='Пустышка' img='Пустышка(ico)' params={params}  values={values_23}  />
            <Select_item name='Плёнка' img='Плёнка(ico)' params={params}  values={values_24}  />
            <Select_item name='Пружина' img='Пружина(ico)' params={params}  values={values_25}  />
            <Select_item name='Батарейка' img='Батарейка(ico)' params={params}  values={values_26}  />
        </div>
    );
}

export default Artefacts_select;