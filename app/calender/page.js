export default function Calendar() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="bg-white shadow mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
        </header>
        <main>
          <p>Your upcoming events will be displayed here.</p>
          {/* You can integrate a calendar library here */}
        </main>
      </div>
    );
  }
  