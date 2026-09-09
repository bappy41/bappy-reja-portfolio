import { useState } from "react";
import { Quote, Star, X, ArrowUpRight } from "lucide-react";

const recommendations = [
  {
    name: "Joel Itzkowitz",
    position: "Coordination Department Manager",
    company: "Marks Home Care LLC",
    relationship: "Department Manager",
    text: "",
  },
  {
    name: "Shakil Ruman",
    position: "Wellness & Support and Back Office Department Manager",
    company: "Marks Home Care LLC",
    relationship: "Department Manager",
    text: "",
  },
  {
    name: "Khairul Hasan Shuvo",
    position: "Branch Manager",
    company: "Hi-Tech IT Solution",
    relationship: "Branch Manager",
    text: "",
  },
];

export default function Recommendations() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="recommendations"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">

        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-mono text-[#4de1ff] mb-3">
            RECOMMENDATIONS
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            What people I’ve worked with say.
          </h2>

          <p className="mt-5 text-white/65 leading-relaxed">
            Professional recommendations from people I have worked with
            throughout my career.
          </p>
        </div>

        {/* Recommendation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendations.map((person) => (
            <div
              key={person.name}
              className="
                group
                relative
                rounded-2xl
                border border-white/15
                bg-white/[0.025]
                p-6
                transition-all duration-300
                hover:border-[#4de1ff]/40
                hover:bg-white/[0.04]
              "
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote
                  size={22}
                  className="text-[#4de1ff]"
                />
              </div>

              {/* Recommendation */}
              <p className="text-white/70 text-sm leading-7 min-h-[100px]">
                Recommendation will appear here after it has been submitted
                and approved.
              </p>

              {/* Person */}
              <div className="mt-7 pt-5 border-t border-white/10">
                <h3 className="text-white font-medium">
                  {person.name}
                </h3>

                <p className="mt-1 text-sm text-white/60">
                  {person.position}
                </p>

                <p className="mt-1 text-sm text-[#4de1ff]/80">
                  {person.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Give Recommendation */}
        <div
          className="
            mt-8
            rounded-2xl
            border border-white/15
            bg-white/[0.02]
            p-7 md:p-8
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-6
          "
        >
          <div>
            <h3 className="text-xl font-medium text-white">
              Worked with me?
            </h3>

            <p className="mt-2 text-sm text-white/60">
              I’d appreciate hearing about your experience working with me.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-white/30
              bg-white/[0.04]
              px-5 py-3
              text-sm
              font-medium
              text-white
              hover:border-[#4de1ff]
              hover:text-[#4de1ff]
              transition-all duration-300
            "
          >
            Give a Recommendation
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      {/* Recommendation Form Modal */}
      {showForm && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/75
            backdrop-blur-sm
            px-5
          "
          onClick={() => setShowForm(false)}
        >
          <div
            className="
              relative
              w-full max-w-xl
              max-h-[90vh]
              overflow-y-auto
              rounded-2xl
              border border-white/15
              bg-[#0b1119]
              p-6 md:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowForm(false)}
              className="
                absolute right-5 top-5
                text-white/50
                hover:text-white
                transition
              "
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="pr-8">
              <p className="text-sm font-mono text-[#4de1ff] mb-2">
                RECOMMENDATION
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Share your experience
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Your recommendation will be reviewed before appearing
                publicly on this website.
              </p>
            </div>

            {/* Form */}
            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Your recommendation has been submitted for review."
                );
                setShowForm(false);
              }}
            >
              <div>
                <label className="block text-sm text-white/75 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  className="
                    w-full rounded-xl
                    border border-white/15
                    bg-white/[0.04]
                    px-4 py-3
                    text-white
                    outline-none
                    focus:border-[#4de1ff]/60
                  "
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-white/75 mb-2">
                    Job Title
                  </label>

                  <input
                    type="text"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-white/[0.04]
                      px-4 py-3
                      text-white
                      outline-none
                      focus:border-[#4de1ff]/60
                    "
                    placeholder="Manager"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/75 mb-2">
                    Company
                  </label>

                  <input
                    type="text"
                    required
                    className="
                      w-full rounded-xl
                      border border-white/15
                      bg-white/[0.04]
                      px-4 py-3
                      text-white
                      outline-none
                      focus:border-[#4de1ff]/60
                    "
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/75 mb-2">
                  Professional Email
                </label>

                <input
                  type="email"
                  required
                  className="
                    w-full rounded-xl
                    border border-white/15
                    bg-white/[0.04]
                    px-4 py-3
                    text-white
                    outline-none
                    focus:border-[#4de1ff]/60
                  "
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/75 mb-2">
                  Your Recommendation
                </label>

                <textarea
                  required
                  rows={5}
                  className="
                    w-full rounded-xl
                    border border-white/15
                    bg-white/[0.04]
                    px-4 py-3
                    text-white
                    outline-none
                    resize-none
                    focus:border-[#4de1ff]/60
                  "
                  placeholder="Write about your experience working with Bappy..."
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-[#4de1ff]
                  px-5 py-3
                  text-sm
                  font-semibold
                  text-[#061018]
                  hover:brightness-110
                  transition
                "
              >
                Submit Recommendation
              </button>

              <p className="text-xs text-white/40 text-center">
                Recommendations are reviewed before publication.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}