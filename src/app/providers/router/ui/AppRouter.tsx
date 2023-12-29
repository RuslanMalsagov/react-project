import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

function AppRouter() {
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            // eslint-disable-next-line i18next/no-literal-string
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
