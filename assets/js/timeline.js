<script>
  const Timeline = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    const years = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2024 - i).reverse();

    return React.createElement(
      "div",
      { className: "wrapper" },
      years.map((year, i) =>
        React.createElement(
          "div",
          {
            key: year,
            onMouseEnter: () => setHoveredIndex(i),
            onMouseLeave: () => setHoveredIndex(null),
            style: {
              display: "inline-block",
              margin: 4,
              padding: 4,
              background: hoveredIndex === i ? "#333" : "#bbb",
              color: "white",
              cursor: "pointer",
            },
          },
          hoveredIndex === i ? year : "|"
        )
      )
    );
  };

  const container = document.getElementById("timeline-root");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(Timeline));
  }
</script>
