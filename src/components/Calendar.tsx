"use client";

/**
 * Horários ocupados da semana
 */
const HORARIOS_OCUPADOS: Record<string, string[]> = {
  "Segunda-feira": ["18:00", "21:00"],
  "Terça-feira": ["18:00", "21:00"],
  "Quarta-feira": ["18:00", "20:00"],
  "Quinta-feira": ["14:00", "18:00"],
  "Sexta-feira": [],
  "Sábado": ["10:00", "11:00"],
};

const DIAS_ORDEM = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const FAIXAS_HORARIO = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "18:00",
  "20:00",
  "21:00",
];

const DIA_RESERVADO_REPOSICAO = "Sexta-feira";
const TEXTO_RESERVADO = "Reservado para reposições e aulas avulsas";

/**
 * Horários válidos do sábado (o resto vira indisponível)
 */
const SABADO_HORARIOS_ATIVOS = ["09:00", "10:00", "11:00"];

function getStatus(dia: string, horario: string) {
  if (dia === "Sábado") {
    if (!SABADO_HORARIOS_ATIVOS.includes(horario)) {
      return "indisponivel";
    }
    return HORARIOS_OCUPADOS["Sábado"].includes(horario)
      ? "ocupado"
      : "livre";
  }

  if (HORARIOS_OCUPADOS[dia]?.includes(horario)) {
    return "ocupado";
  }

  return "livre";
}

export default function Calendar() {
  return (
    <section id="horarios" className="px-4 py-12 bg-off-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Nossos horários batem?
        </h2>

        <div className="rounded-2xl border bg-white overflow-hidden">
          {/* Desktop */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="p-3 text-left">Horário</th>
                  {DIAS_ORDEM.map((dia) => (
                    <th key={dia} className="p-3 text-center">
                      {dia.replace("-feira", "")}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {FAIXAS_HORARIO.map((h, rowIndex) => (
                  <tr key={h}>
                    <td className="p-3">{h}</td>

                    {DIAS_ORDEM.map((dia) => {
                      if (dia === DIA_RESERVADO_REPOSICAO) {
                        if (rowIndex === 0) {
                          return (
                            <td
                              key={dia}
                              rowSpan={FAIXAS_HORARIO.length}
                              className="text-center bg-rosa-suave/40"
                            >
                              {TEXTO_RESERVADO}
                            </td>
                          );
                        }
                        return null;
                      }

                      if (dia === "Sábado") {
                        // primeira linha: horários ativos
                        if (SABADO_HORARIOS_ATIVOS.includes(h)) {
                          const status = getStatus(dia, h);
                          return (
                            <td key={dia} className="p-2 text-center">
                              <span
                                className={`inline-block w-full py-2 rounded-lg text-sm font-medium ${
                                  status === "ocupado"
                                    ? "bg-rosa-suave border border-rosa-destaque/30"
                                    : "bg-off-white border border-marrom-medio/30"
                                }`}
                              >
                                {status === "ocupado" ? "Ocupado" : "Livre"}
                              </span>
                            </td>
                          );
                        }

                        // bloco único de indisponível
                        if (rowIndex === 0) {
                          return (
                            <td
                              key={dia}
                              rowSpan={FAIXAS_HORARIO.length}
                              className="text-center bg-marrom-medio/15 text-marrom-medio"
                            >
                              Indisponível
                            </td>
                          );
                        }
                        return null;
                      }

                      const status = getStatus(dia, h);

                      return (
                        <td key={dia} className="p-2 text-center">
                          <span
                            className={`inline-block w-full py-2 rounded-lg text-sm font-medium ${
                              status === "ocupado"
                                ? "bg-rosa-suave border border-rosa-destaque/30"
                                : "bg-off-white border border-marrom-medio/30"
                            }`}
                          >
                            {status === "ocupado" ? "Ocupado" : "Livre"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden divide-y">
            {DIAS_ORDEM.map((dia) => (
              <div key={dia} className="p-4">
                <p className="font-semibold mb-3">{dia}</p>

                {dia === DIA_RESERVADO_REPOSICAO ? (
                  <p className="bg-rosa-suave/40 p-3 rounded-lg text-sm">
                    {TEXTO_RESERVADO}
                  </p>
                ) : dia === "Sábado" ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {SABADO_HORARIOS_ATIVOS.map((h) => {
                        const status = getStatus(dia, h);
                        return (
                          <span
                            key={h}
                            className={`px-3 py-1.5 rounded-lg text-sm ${
                              status === "ocupado"
                                ? "bg-rosa-suave border border-rosa-destaque/30"
                                : "bg-off-white border border-marrom-medio/30"
                            }`}
                          >
                            {h} · {status === "ocupado" ? "Ocupado" : "Livre"}
                          </span>
                        );
                      })}
                    </div>

                    <p className="bg-marrom-medio/15 text-marrom-medio text-sm p-3 rounded-lg">
                      Indisponível
                    </p>
                  </>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {FAIXAS_HORARIO.map((h) => {
                      const status = getStatus(dia, h);
                      return (
                        <span
                          key={h}
                          className={`px-3 py-1.5 rounded-lg text-sm ${
                            status === "ocupado"
                              ? "bg-rosa-suave border border-rosa-destaque/30"
                              : "bg-off-white border border-marrom-medio/30"
                          }`}
                        >
                          {h} · {status === "ocupado" ? "Ocupado" : "Livre"}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
