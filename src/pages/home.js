import React from 'react';
import OptForm from '../components/opt-form/index';
import Feature from '../components/feature/index';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';


export default function Home() {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>GET STARTED</OptForm.Button>
                    </OptForm>
                </Feature>

            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}