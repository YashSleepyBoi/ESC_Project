import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Accordion from '../Accordion';

describe('Accordion component', () => {
    test('render without crashing', () => {
        const { getByText } = render(<Accordion />);
        expect(getByText(/[\+-]/)).toBeInTheDocument();
    });
    test('render with title and content', () => {
        const title = 'Test Title';
        const content = 'Test Content';
        const { getByText, queryByText } = render(<Accordion title={title} content={content} />);

        expect(getByText(title)).toBeInTheDocument();
        expect(queryByText(content)).not.toBeInTheDocument();
    });

    test('render with title and content when clicked', () => {
        const title = 'Test Title';
        const content = 'Test Content';
        const { getByText, queryByText } = render(<Accordion title={title} content={content} />);

        fireEvent.click(getByText(title));
        expect(queryByText(content)).toBeInTheDocument();

        fireEvent.click(getByText(title));
        expect(queryByText(content)).not.toBeInTheDocument();
    });
});
