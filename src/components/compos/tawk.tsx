import Script from 'next/script';

const Tawk = () => {
  return (
    <Script
      id="tawk-script"
      strategy="lazyOnload" // Load the script only after the initial render
      src="https://embed.tawk.to/668195fc9d7f358570d58ca2/1i1l33ouu"
    />
  );
};

export default Tawk;
