import React from 'react';

import HeaderComponent from '../components/pattern/HeaderComponent';
import BackgroundComponent from '../components/pattern/BackgroundComponent';
import CardComponent from '../components/pattern/CardComponent';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="app">
                <HeaderComponent />
                <BackgroundComponent />
                <CardComponent>
                        <div className="about">
                            <h2 className="about__title">Lorem ipsum dolor sit amet consectetur.</h2>
                            <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, in. Incidunt vitae veniam ratione labore necessitatibus nostrum expedita repudiandae assumenda quos, dicta iure quaerat tempora accusamus adipisci, reprehenderit ipsa voluptatibus, rem illo. Deserunt, ad. Iure quod nobis iusto voluptates optio totam! Cupiditate, assumenda obcaecati iure magnam quos distinctio atque reprehenderit voluptate similique eos reiciendis aspernatur quam esse nobis itaque saepe fuga ipsam mollitia cumque voluptates consectetur tenetur. Nesciunt itaque veniam nisi reiciendis, aliquid, culpa, facere aliquam maiores natus laborum reprehenderit?</p>
                        </div>
                </CardComponent>
            </div>
        )
    }
};

export default AboutPage;
