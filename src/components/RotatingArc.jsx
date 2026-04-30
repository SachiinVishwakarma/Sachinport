const SegmentedCircle = ({ imageUrl }) => {
  const segments = 36;
  const radius = 130;
  const center = 200;

  return (
    <div className="relative w-[350px] h-[350px] md:w-[480px] md:h-[480px]">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9f9f9" />
            <stop offset="100%" stopColor="#d9d5d2" />
          </linearGradient>
        </defs>

        {Array.from({ length: segments }).map((_, i) => {
          const angle = (360 / segments) * i;
          const delay = i * 0.05;

          return (
            <rect
              key={i}
              x={center - 2.5}
              y={center - radius}
              width="5"
              height="30"
              rx="3"
              fill="url(#grad)"
              transform={`rotate(${angle} ${center} ${center})`}
            >
              <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur="1.8s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </rect>
          );
        })}
      </svg>

      <img
        src={imageUrl}
        alt="profile"
        className="
    absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    sm:w-[60%] md:w-[100%]
    max-w-[400px]
    object-contain
    z-10
  "
      />
    </div>
  );
};

export default SegmentedCircle;