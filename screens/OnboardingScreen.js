import React from 'react';
import { StyleSheet, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            skipLabel='Пропустить'
            nextLabel='Дальше'
            onSkip={() => navigation.replace("MainNav")}
            onDone={() => navigation.replace("MainNav")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Изучайте',
                    subtitle: 'Демонстрационное приложение мобильного ТБД',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Почувствуйте',
                    subtitle: 'Данные всегда рядом',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Шшшшикааарно',
                    subtitle: 'Цитата Эрик Картман',
                }
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})