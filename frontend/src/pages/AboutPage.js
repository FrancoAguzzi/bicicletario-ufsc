import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import BackgroundComponent from '../components/BackgroundComponent';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="app">
                <HeaderComponent />
                <BackgroundComponent />
                <main className="content">
                    <div className="content__about">
                        <div className="about">
                            <h2 className="about__title">Lorem ipsum dolor sit amet consectetur.</h2>
                            <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, in. Incidunt vitae veniam ratione labore necessitatibus nostrum expedita repudiandae assumenda quos, dicta iure quaerat tempora accusamus adipisci, reprehenderit ipsa voluptatibus, rem illo. Deserunt, ad. Iure quod nobis iusto voluptates optio totam! Cupiditate, assumenda obcaecati iure magnam quos distinctio atque reprehenderit voluptate similique eos reiciendis aspernatur quam esse nobis itaque saepe fuga ipsam mollitia cumque voluptates consectetur tenetur. Nesciunt itaque veniam nisi reiciendis, aliquid, culpa, facere aliquam maiores natus laborum reprehenderit?</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};

export default AboutPage;
