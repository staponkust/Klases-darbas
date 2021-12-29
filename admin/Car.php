<?php
class Car
{
    public string $spalva;
    public string $greitis;
    public string $dureles;
    private float $rida = 0;

    public function vaziuoti(float $kieklaiko): void
    {
        echo "Automobilis važiuoja ".$this->greitis." greičiu, ir vaziuos " . $kieklaiko . ' valandas.';
        $kelias = (int)$this->greitis * $kieklaiko;
        $this->didintirida($kelias);
    }

    public function gautiSpalva(): string
    {
        return $this->spalva;
    }

    public function dureles(): void
    {
        echo 'Dureliu skaicius: ' . $this->dureles . ' dureles.';
    }

    public function gautirida(): float
    {
        return $this->rida;
    }

    private function didintirida(float $kiek)
    {
        $this->rida += $kiek;
    }
}