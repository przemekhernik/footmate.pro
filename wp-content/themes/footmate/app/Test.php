<?php
use function Wps\template;
use WPS\Init;

ini_set('error_reporting', E_ALL);

class psr1_test_class {

  private const constantTest = 'asd';

  private $lengthTest = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest';

  public function __construct() {
    $arrayTest = array();
  }

  function visibilityTest() {
    return;
  }

  public function naming_convention_test() {
    echo 'test';
  }

  private function keywordsTest(STRING $param): void
  {
    return;
  }

  public function classInitializationTest(): void
  {
    $test = new Init;
  }

  public function argumentsTest( string $param = '',bool & $test):void
  {
    return;
  }

  public function controlStructuresTest(string $param): string
  {
    if(!true)
    {
      return '';
    } elseif(true) {
      return '';

    } else {
      return '';
    }

    switch ($param) {
      case 'value':
        return '';

      default:
        return '';
    }
  }

  public function operatorsTest(): void
  {
    $i = 0;

    $i ++;

    $i = ( int ) $i;

    if ($i===1) {
      return;
    }

    $i = $i === 1 ? 0 :1;
  }
}
?>
