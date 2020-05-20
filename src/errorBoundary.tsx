import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  error: ReactNode;
  hasError?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: this.props.hasError || false };
  }

  static getDerrivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: object): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.error;
    }

    return this.props.children;
  }
}
