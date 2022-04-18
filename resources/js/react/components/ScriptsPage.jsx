import React from 'react';
import {gql, useMutation, useQuery} from '@apollo/client';
import { Button } from '@shopify/polaris';
import { useState } from 'react';

function ScriptsPage() {
    const [isInstalled, setInstalled] = useState(false);
    const SCRIPT_TAG_URL = "https://weeklyhow.com/codes/larabelle/script.js";

    const CHECK_SCRIPT_TAG = gql`query {
        scriptTags(first: 50 src: "${SCRIPT_TAG_URL}") {
            edges {
                node {
                    id
                    src
                }
            }
        }
    }`;

    const { loading, error, data } = useQuery(CHECK_SCRIPT_TAG);

    if(error) return `Error: ${error.message}`;
    if(data != undefined) {
        if(data.scriptTags.edges[0].node.src == SCRIPT_TAG_URL && !isInstalled) {
            setInstalled(true);
        }
    }

    const CREATE_SCRIPTTAG_QUERY = gql`mutation {
        scriptTagCreate(input: {
            cache: false,
            displayScope: ALL,
            src: "${SCRIPT_TAG_URL}"
        }) {
            scriptTag {
                id
                src
                displayScope
            }
        }
    }`;

    const [createScriptTagMutation, { createScriptTagMutationData }] = useMutation(CREATE_SCRIPTTAG_QUERY);

    return <>
        <div>
            <Button
                onClick={createScriptTagMutation}
                disabled={ isInstalled ? true : false }
                loading={ loading ? true : false }
            >
                Install Script Tag
            </Button>
        </div>
    </>;
}

export default ScriptsPage;