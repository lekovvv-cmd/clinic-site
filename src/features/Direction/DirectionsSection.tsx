import { useState } from "react";
import { useGetDirectionsQuery } from "../../services/directionsApi";
import { DirectionCard } from "../../components/Card/DirectionCard";
import { Button } from "../../components/Button/Button";

const DirectionsSection = () => {
  const { data: dirs, isLoading, isError } = useGetDirectionsQuery();
  const [showAll, setShowAll] = useState(false);

  const visibleCount = showAll ? dirs?.length ?? 0 : 6;

  return (
    <section className="py-2" id="directions">
      <h2 className="text-3xl font-bold mb-12 mx-5">Направления</h2>

      {isLoading && <p className="text-center font-bold">Загрузка...</p>}
      {isError && (
        <p className="text-center font-bold text-red-500">
          Ошибка загрузки направлений.
        </p>
      )}

      {dirs && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {dirs.map((dir, index) => (
              <div
                key={dir.id}
                style={{ display: index < visibleCount ? "block" : "none" }}
              >
                <DirectionCard dir={dir} />
              </div>
            ))}
          </div>

          {dirs.length > 6 && (
            <div className="text-center mt-8">
              <Button onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? "Скрыть" : "Показать ещё"}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};


export default DirectionsSection;
