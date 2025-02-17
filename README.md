# ASS Performance Logger

A performance monitoring and analysis tool for ASS third project database performance across MongoDB, MariaDB and Atlas.

## Features

- Interactive dashboard for visualizing performance metrics
- Support for multiple databases (MongoDB, MariaDB, Atlas)
- CSV data upload functionality
- Endpoint/service-specific filtering
- Comprehensive documentation
- Local storage using IndexedDB

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Recharts for visualization
- IndexedDB for local storage

## Project Structure

```
ass-performance-logger/
├── src/
│   ├── api/
│   │   └── db.ts                # IndexedDB database operations
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── ui/                  # UI components from shadcn/ui
│   │   ├── app-sidebar.tsx      # Main sidebar navigation
│   │   ├── confirm-dialog.tsx   # Confirmation dialog component
│   │   ├── endpoint-select.tsx  # Endpoint selection dropdown
│   │   ├── file-uploader.tsx    # File upload component
│   │   ├── linechart.tsx        # Performance visualization chart
│   │   ├── nav-main.tsx         # Main navigation component
│   │   ├── reset-button.tsx     # Data reset button
│   │   └── team-switcher.tsx    # Team switching component
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Mobile detection hook
│   │   └── use-toast.ts         # Toast notification hook
│   ├── layout/
│   │   └── MainLayout.tsx       # Main application layout
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── pages/
│   │   ├── BasicPage.tsx        # Base page template
│   │   ├── Dashboard.tsx        # Performance dashboard
│   │   ├── Data.tsx             # Data upload page
│   │   ├── Docs.tsx             # Documentation page
│   │   └── Landing.tsx          # Landing page
│   ├── styles/
│   │   └── globals.css          # Global styles
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── vite-env.d.ts           # Vite type definitions
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Usage

1. Upload performance data through the Data page
2. View and analyze performance metrics in the Dashboard
3. Filter results by database and endpoint/service
4. Consult the Documentation for detailed usage instructions

## Documentation

Detailed documentation is available in the application, covering:

- Getting Started Guide
- Data Upload Format
- Dashboard Usage
- API Reference

## License

[MIT License](LICENSE)
