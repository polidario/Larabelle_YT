import React from 'react';
import {gql, useMutation} from '@apollo/client';

function ScriptsPage() {
    const CREATE_SCRIPTTAG_QUERY = gql`mutation {
        scriptTagCreate(input: {
            cache: false,
            displayScope: ALL,
            src: "https://weeklyhow.com/codes/larabelle/script.js"
        }) {
            scriptTag {
                id
                src
                displayScope
            }
        }
    }`;

    const [createScriptTagMutation, { data }] = useMutation(CREATE_SCRIPTTAG_QUERY);

    createScriptTagMutation();

    return <div>This is the scripts page</div>;
}

export default ScriptsPage;