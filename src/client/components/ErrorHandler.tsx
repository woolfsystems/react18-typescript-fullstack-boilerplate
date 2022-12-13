import React from 'react'
import { Card, Title } from "@tremor/react"

export const ErrorHandler = ({ error, resetErrorBoundary }) =>
    <Card>
        <Title><b>A problem occurred:</b> {error.message}</Title>
    </Card>
