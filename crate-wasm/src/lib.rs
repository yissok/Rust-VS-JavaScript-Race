use lazy_static::lazy_static;
use primal_sieve::Sieve;
use std::u16;
use wasm_bindgen::prelude::*;
use web_sys::console;

mod utils;

#[wasm_bindgen]
pub fn init() {
    utils::init();
    console::log_1(&"Hello from WebAssembly!".into());
}

lazy_static! {
    static ref SIEVE: Sieve = Sieve::new(u16::MAX as usize);
}

#[wasm_bindgen]
pub fn is_prime(number: u16) -> bool {
    SIEVE.is_prime(number as usize)
}

#[wasm_bindgen]
pub fn add(a: i32) -> i32 {
  return a + 5;
}

#[wasm_bindgen]
pub fn add2(a: i32) -> i32 {
  return a + 10;
}


// Counts to whatever.
#[wasm_bindgen]
pub fn count_a_lot(a: i32) -> i32 {
  let mut i: i32 = 0;
  for _x in 0..a
  {
    i=i+1;
  }
  return i;
}