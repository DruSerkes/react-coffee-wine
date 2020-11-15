import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BtnLink } from '../components/BtnLink'


describe('BtnLink Tests', () => {
    it('should pass smoke/snapshot test', () => {
        const { asFragment } = render(<BtnLink text="Test" color="#2F2F2F" link="https://test.com/test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render text "test"', () => {
        render(<BtnLink text="Test" color="#2F2F2F" link="https://test.com/test" />);
        const testButton = screen.getByText('Test');
        expect(testButton).toBeInTheDocument();
    })

    it('should redirect to google.com', () => {
        render(<BtnLink text="Test" color="#2F2F2F" link="https://google.com/" />);
        const testButton = screen.getByText('Test');
        fireEvent.click(testButton);
        waitFor(() => {
            expect(window.location).toBe('https://google.com/');
        })

    })
})