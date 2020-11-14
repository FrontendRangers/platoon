import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, Heading, Paragraph } from '@platoon/react';
import React from 'react';

export default function Home() {
    return (
        <div className={styles.container}>
            <Heading>Platoon</Heading>
            <Paragraph>Super duper design system</Paragraph>
            <Button>Hello Next</Button>
        </div>
    );
}
