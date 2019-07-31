import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MyContactList from './components/MyContactList';
import ContactCreate from './components/ContactCreate';
import ContactEdit from './components/ContactEdit';

const RouterComponent = () => {
    return(
        <Router>
            <Scene 
            key="root" hideNavBar>
                <Scene key="auth">
                   <Scene key="login" 
                    component={LoginForm} 
                    title="Lütfen Giriş Yapın"
                    initial
                />
                </Scene>
                <Scene key="main">
                <Scene 
                key="myContactList" 
                component={MyContactList} 
                title="Kişilerim"
                rightTitle="Ekle"
                onRight={()=> Actions.contactCreate()}
                initial
                />
                <Scene 
                key="contactCreate" 
                component={ContactCreate} 
                title="Kişi Ekle"
                />
                 <Scene 
                key="contactEdit" 
                component={ContactEdit} 
                title="İletişim Düzenle"
                />
                </Scene>
            </Scene>
        </Router>
    );
};

export  default RouterComponent;