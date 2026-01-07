export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Intern – IBaseIT</h3>
          <p className="text-sm text-gray-600">May 2024 – June 2024</p>
          <p className="mt-2 text-gray-700">
            Built GradeSync, a student grade management system using Python and MySQL.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Intern – ODT</h3>
          <p className="text-sm text-gray-600">April 2025 – June 2025</p>
          <p className="mt-2 text-gray-700">
            Migrated a legacy PHP Symfony system to Python for improved maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
