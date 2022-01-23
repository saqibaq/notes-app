import React from "react";
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import HighlightIcon from "@material-ui/icons/Highlight";
import { OptionLink } from './header.styles';

function Header({ currentUser, props }) {
    return (
        <header>
            <h1>
                <HighlightIcon />
                Keeper
            </h1>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={() => {
                        auth.signOut();
                        window.location.href = '/signin';
                    }}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                )
            }
        </header>
    );
}

export default withRouter(Header);