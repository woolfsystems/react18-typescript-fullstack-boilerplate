import React, { Suspense } from 'react'
import { Card, Title } from "@tremor/react"
import { ErrorBoundary } from 'react-error-boundary'

import '@tremor/react/dist/esm/tremor.css'
import './assets/index.css'

import { Loader } from './components/Loader'
import { IndexPage } from './pages/IndexPage'

import { ErrorHandler } from './components/ErrorHandler'


export const App = ()=>
    <Card>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Title>Boilerplate Project</Title>
            <Suspense fallback={<Loader enabled />}>
                <IndexPage />
            </Suspense>
        </ErrorBoundary>
    </Card>