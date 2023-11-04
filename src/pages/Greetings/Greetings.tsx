import {Button, Flex, Text} from "@mantine/core";
import './Greetings.css'
import {NavLink} from "react-router-dom";

const Greetings = () => {
    return (
        <Flex className='greetings'>
            <Text className='greetings__text'>
                Добро пожаловать!
                Начни&nbsp;свой&nbsp;путь&nbsp;вместе&nbsp;с&nbsp;нами
            </Text>
            <Button className='greetings__button' component={NavLink} to='register'>Регистрация</Button>
            <Button className='greetings__button' component={NavLink} to='login'>Вход</Button>
        </Flex>
    );
};

export default Greetings;