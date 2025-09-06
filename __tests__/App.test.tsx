/**
 * @format
 */

import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import App from '../App';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

async function goToCreateNewEntryPage() {
  render(<App />);
  const button = screen.getByText('Create new entry');
  const user = userEvent.setup();
  await user.press(button);
}

async function goToTodaysEntryPage() {
  render(<App />);
  const button = screen.getByText("Today's entry");
  const user = userEvent.setup();
  await user.press(button);
}

async function fillUpAndSubmitCreateEntryForm(title: string, desc: string) {
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText('title'), title);
  await user.type(screen.getByPlaceholderText('description'), desc);
  await user.press(screen.getByText('Add'));
}

describe('app tests', () => {
  test('app renders without any errors', async () => {
    render(<App />);
    expect(screen.getByText('Current theme: light')).toBeOnTheScreen();
  });

  describe('theme feature', () => {
    test('switch theme button works', async () => {
      render(<App />);
      expect(screen.getByText('Current theme: light')).toBeOnTheScreen();
      const button = screen.getByText('Switch theme');
      expect(button).toBeOnTheScreen();
      const user = userEvent.setup();
      await user.press(button);
      expect(screen.getByText('Current theme: dark')).toBeOnTheScreen();
    });
  });

  describe('note entry feature', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date(2025, 7, 18));
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test('initially shows no entry in todays entry page', async () => {
      await goToTodaysEntryPage();
      expect(screen.getByText('No entry!')).toBeOnTheScreen();
    });
    test('shows success text after note entry creation', async () => {
      await goToCreateNewEntryPage();
      expect(screen.getByText('Todays date is: 2025-08-18')).toBeOnTheScreen();
      await fillUpAndSubmitCreateEntryForm('Test title', 'Test description');

      expect(
        screen.getByText('Your note is added for today!'),
      ).toBeOnTheScreen();
    });
    test('shows newly added entry in todays entry page', async () => {
      await goToTodaysEntryPage();
      expect(screen.getByText('Test title')).toBeOnTheScreen();
      expect(screen.getByText('Test description')).toBeOnTheScreen();
    });
  });
});
