import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title='Hello' description='Hello React Page'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>src/pages/test/hiReact.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
