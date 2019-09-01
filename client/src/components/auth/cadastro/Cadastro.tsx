import React from 'react';

import 'bulma/css/bulma.min.css';

import { Card } from '../Home.styles';
import Form from './form/Form';

const pub = process.env.PUBLIC_URL;

export default function Cadastro() {
    return (
        <div>
            <Card className="card">
                <br></br>

                <Form />

                <br></br>
            </Card>

        </div>
    );
}
